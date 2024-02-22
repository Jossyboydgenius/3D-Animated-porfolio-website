// import React from "react";
// import clsx from "clsx";

// type BoundedProps = {
//     as?: React.ElementType;
//     className: React.ReactNode;

// }

// const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
//     ({ as: Comp = "selection", className, children, ...resrProps}, ref) => {
//         return (
//             <Comp
//             ref={ref}
//             className={clsx("px-4 py-10 md:px-6 md:py-14 lg:py-16", className)}
//             {...resrProps}
//             >
//                 <div className="mx-auto w-full max-w-7x1">
//                 {children}
//                 </div>
//             </Comp>
//         )
//     }
// )

// Bounded.displayName = "Bounded";

// export default Bounded

import React from "react";
import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: React.ReactNode;
  children: React.ReactNode; // Add the 'children' property
};

const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
  ({ as: Comp = "div", className, children, ...restProps }, ref) => {
    return (
      <Comp
        ref={ref}
        className={clsx("px-4 py-10 md:px-6 md:py-14 lg:py-16", className)}
        {...restProps}
      >
        <div className="mx-auto w-full max-w-7x1">{children}</div>
      </Comp>
    );
  }
);

Bounded.displayName = "Bounded";

export default Bounded;
