import { Octokit } from "octokit";
import { NextResponse, NextRequest } from "next/server";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      { error: "Username is required" },
      { status: 401 },
    );
  }

  try {
    const query = `
        query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }`;

    const response = await octokit.graphql(query, { username });
    //@ts-ignore
    const calendar = response.user.contributionsCollection.contributionCalendar;

    //Flatten the weeks array to get all contribution days
    //@ts-ignore
    const contributions = calendar.weeks.flatMap((week) =>
      //@ts-ignore
      week.contributionDays.map((day) => ({
        count: day.contributionCount,
        date: day.date,
      })),
    );

    return NextResponse.json({
        user : {
            totalContribution:calendar.totalContributions
        },
        contributions
    })
  } catch (error) {
    console.error("Github aoi error", error);
    return NextResponse.json(
        { error : "failed to fetch the github data"},
        {status : 500}
    )
  }
}
