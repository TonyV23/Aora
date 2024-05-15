import { Client, Account } from "react-native-appwrite";

const client = new Client();
const account = new Account(client);

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.viper23.aora",
  projectId: "66445954002a7457fe9b",
  databaseId: "66445c5d0010bb8ed426",
  userCollectionId: "66445cc4000fb7b9be1a",
  videoCollectionId: "66445d0a00180a44bb83",
  storageId: "6644617700127663b895",
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
