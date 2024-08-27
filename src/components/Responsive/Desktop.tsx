// LIBRARIES
import React from "react";
import { useMediaQuery } from "react-responsive";
// TYPES
import { Children } from "../../types/ChildrenType";

function Desktop({ children }: Children): React.ReactNode {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return isDesktop ? children : null;
}

export default Desktop;
