import dotenv from 'dotenv';
import cwp from 'chatwork-api-client';
import tailFile from 'tail';
dotenv.config();

const ChatworkApi = cwp.default;
const Tail = tailFile.Tail;
const api = new ChatworkApi(process.env.CHATWORK_API_TOKEN);

let tail = new Tail(process.env.LOG_PATH);
tail.watch();
tail.on('line', async (data) => {
  try {
    await api.postRoomMessage(process.env.CHATWORK_ROOM_ID, {
      body: data,
      self_unread: 1,
    });
  } catch (e) {
    console.log(e);
  }
});