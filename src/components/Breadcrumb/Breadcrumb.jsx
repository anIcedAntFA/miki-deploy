import { Children, Fragment } from 'react';
import { NavigateNextIcon } from '../Icons';

const BreadcrumbNavigation = 'nav';
const BreadcrumbOrderList = 'ol';

export default function Breadcrumb({ children }) {
  const childrenArray = Children.toArray(children);
  // console.log(childrenArray);

  const childrenWithSeparators = childrenArray.map((child, index) => {
    if (index !== children.length - 1) {
      return (
        <Fragment key={index}>
          {child}
          <span>
            <NavigateNextIcon />
          </span>
        </Fragment>
      );
    }
    return child;
  });
  // console.log(childrenWithSeparators);

  return (
    <BreadcrumbNavigation aria-label="breadcrumb">
      <BreadcrumbOrderList className="flex items-center">
        {childrenWithSeparators}
      </BreadcrumbOrderList>
    </BreadcrumbNavigation>
  );
}