export interface TopicPreviewProps {
  imageSrc: string;
  label: string;
  description: string;
  tags: TopicTag[]; //Max 2
  mainTag: TopicTag; //Tag with topick label
}

export type TopicTag = {
  label: string;
  value: string;
};
