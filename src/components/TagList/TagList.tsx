import React from 'react';

import Link from 'Link';

type TagProps = {
  href?: string;
  id: string;
  title: string;
};

type TagListProps = {
  tags: TagProps[];
};

export const TagList = ({ tags }: TagListProps) => (
  <ul className="cc-tag-list">
    {tags?.map(({ id, href, title }) => (
      <li>
        {href ? (
          <Link className="cc-tag cc-tag--link" key={id} to={href}>
            {title}
          </Link>
        ) : (
          <span className="cc-tag" key={id}>
            {title}
          </span>
        )}
      </li>
    ))}
  </ul>
);

export default TagList;
