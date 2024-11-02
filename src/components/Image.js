/**
 * eslint-disable jsx-a11y/alt-text
 *
 * @format
 */

/**
 * eslint-disable jsx-a11y/alt-text
 *
 * @format
 */

/** @format */

import { useState } from "react";

export default function Image(props) {
  const { fallback = null } = props;
  const [isBroken, setIsBroken] = useState(false);

  function handleError() {
    setIsBroken(true);
  }

  if (isBroken) {
    return fallback;
  }

  return <img onError={handleError} alt={props.alt || ""} {...props} />;
}
