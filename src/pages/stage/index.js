import React from 'react'
import { getArticle, getStage } from 'data-api';

const Page = ({ stage }) =>
  <pre>
    {JSON.stringify(stage, null, 2)}
  </pre>;

Page.getInitialProps = async () => {
  const stage = await getStage(['5a93e0723195eb0001099401', '5a93ff813195eb0001099438','5a93e0723195eb0001099411']);
  return { stage };
};

export default Page
