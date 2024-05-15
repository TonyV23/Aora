import { Client, Account } from "react-native-appwrite";
import 'react-native-dotenv';

const client = new Client();
const account = new Account(client);

export const config = {
  endpoint: process.env.CONFIG_ENDPOINT,
  platform: process.env.CONFIG_PLATFORM,
  projectId: process.env.CONFIG_PROJECT_ID,
  databaseId: process.env.CONFIG_DATABASE_ID,
  userCollectionId: process.env.CONFIG_USER_COLLECTION_ID,
  videoCollectionId: process.env.CONFIG_VIDEO_COLLECTION_ID,
  storageId: process.env.CONFIG_STORAGE_ID,
};

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

export const createUser = () => {
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
