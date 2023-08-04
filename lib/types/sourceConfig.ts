interface LocalSourceConfig {
  data: {
    type: 'local' | 'notion';
    name: string;
    value?: number;
  };
}

export type SourceConfig = LocalSourceConfig;
