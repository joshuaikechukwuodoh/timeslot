import { google } from "googleapis";
import env from "dotenv";
env.config();

const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

oAuth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const calendar = google.calendar({ version: "v3", auth: oAuth2Client });

export const createEvent = async (booking) => {
  const event = {
    summary: `Session with ${booking.full_name}`,
    description: `Type: ${booking.session_type}, Email: ${booking.email}`,
    start: {
      dateTime: new Date(
        `${booking.date}T${booking.start_time}:00`
      ).toISOString(),
      timeZone: booking.timezone,
    },
    end: {
      dateTime: new Date(
        `${booking.date}T${booking.end_time}:00`
      ).toISOString(),
      timeZone: booking.timezone,
    },
  };
  calendar.events.insert({
    calendarId: "primary",
    resource: event,
  });
};
