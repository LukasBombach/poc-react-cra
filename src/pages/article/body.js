import React from 'react';

export default ({ article: { body } }) =>
  <div dangerouslySetInnerHTML={{ __html: body }} />
