import { Paper, Title } from 'byh-components';
import React from 'react';
import './Comment.scss';
export const Comment = () => {
  return (
    <Paper className="comment__wrapper" width={770} style={{ marginBottom: 40 }}>
      <Title className="comment__title" variant="primary">
        Комментарий продавца
      </Title>
      <p style={{ lineHeight: '30px', fontSize: 20 }}>
        Авто в идеальном состоянии, абсолютно весь в родном окрасе! Никаких дтп и прочих
        неприятностей! Полностью обслужен 500км назад. Панормная крыша, музыка ХарманКардон,
        доводчики дверей,проекция, ассисенты движения и много другого Авто в идеальном состоянии,
        абсолютно весь в родном окрасе! Никаких дтп и прочих неприятностей! Полностью обслужен 500км
        назад. Панормная крыша, музыка ХарманКардон, доводчики дверей,проекция, ассисенты движения и
        много другого Авто в идеальном состоянии, абсолютно весь в родном окрасе! Никаких дтп и
        прочих неприятностей! Полностью обслужен 500км назад. Панормная крыша, музыка ХарманКардон,
        доводчики дверей,проекция, ассисенты движения и много другого
      </p>
    </Paper>
  );
};
