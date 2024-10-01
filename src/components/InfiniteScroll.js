import React, { useEffect } from 'react';

const InfiniteScroll = ({ loadMore, children }) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        loadMore();  // Trigger fetch for the next batch
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMore]);

  return <div>{children}</div>;
};

export default InfiniteScroll;
