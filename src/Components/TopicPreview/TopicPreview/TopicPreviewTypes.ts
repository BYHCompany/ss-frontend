export interface TopicPreviewProps {
  topicId: string | null;
  imageSrc: string[] | null;
  label: string | null;
  description: string | null;
  tags: string[] | null; //Max 2
}

export type TopicTag = {
  label: string;
  value: string;
};
