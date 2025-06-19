import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/drive.readonly"],
});

export const getGoogleDriveMedia = async () => {
  const drive = google.drive({ version: "v3", auth });
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

  const res = await drive.files.list({
    q: `'${folderId}' in parents and mimeType contains 'video/' and trashed = false`,
    fields: "files(id, name, mimeType)",
  });

  return res.data.files || [];
};

const googleService = {
  getGoogleDriveMedia,
};

export default googleService;
