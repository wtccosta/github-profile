import ContentLoader from 'react-content-loader';

const GitSearchLoader = () => {
  return (
    <div>
      <FadingLoaderCard1 />
    </div>
  );
};

const FadingLoaderCard1 = () => {
  return (
    <ContentLoader
      width={1000}
      height={300}
      backgroundColor="#ababab"
      foregroundColor="#fafafa"
    >
      <rect x="400" y="15" rx="5" ry="5" width="1000" height="15" />
      <rect x="400" y="39" rx="5" ry="5" width="1000" height="9" />
      <rect x="400" y="39" rx="5" ry="5" width="1000" height="9" />
      <rect x="400" y="39" rx="5" ry="5" width="1000" height="9" />
      <rect x="70" y="1" rx="0" ry="0" width="300" height="300" />
    </ContentLoader>
  );
};



GitSearchLoader.metadata = {
  name: 'Nikhil Anand', // My name
  github: 'anandnkhl', // Github username
  description: 'Loader that fades downwards', // Little tagline
  filename: 'FadingLoader', // filename of your loader
};

export default GitSearchLoader;
