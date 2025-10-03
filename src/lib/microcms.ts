import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries, MicroCMSDate } from "microcms-js-sdk";

console.log("読み込まれたサービスドメイン:", import.meta.env.SERVICE_DOMAIN);
console.log("読み込まれたAPIキー:", import.meta.env.API_KEY ? "設定されています" : "未設定です");

// ブログ記事の型定義
export type Post = {
  href: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  category: string;
  tags: {
    name: string;
  };
  publishDate: MicroCMSDate;
  updateDate: MicroCMSDate;
};

// クライアントの作成
export const client = createClient({
  serviceDomain: import.meta.env.SERVICE_DOMAIN,
  apiKey: import.meta.env.API_KEY,
});

// ブログ一覧を取得する関数
export const getPosts = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Post>({
    endpoint: "post",
    queries,
  });
  return listData;
};

