interface LocalPost {
  type: 'local';
  content: string;
  value?: number;
}
interface NotionPost {
  type: 'notion';
  content: any;
  value?: number;
}

interface PostCommon {
  path: string;
  slug: string;
  permalink: string;
  createdAt: number;
  title: string;
  content: string;
  value: number;
}

export type Post = PostCommon & (LocalPost | NotionPost);
