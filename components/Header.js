import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div>
      <h1>i am header</h1>
      {/**left */}
      <div>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2880px-Instagram_logo.svg.png"
          layout="fill"
        />
      </div>
      {/**middle */}
      {/**right */}
    </div>
  );
}

export default Header;
