import React from "react";
import Posts from "./Posts.js";
import Stories from "./Stories.js";

function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      {/* Section */}
      <section className="col-span-2">
        {/* Stories */}
        <Stories />
        {/* post */}
        <Posts />
      </section>

      {/* Section */}
      <section>
        {/* mini Profile  */}
        {/* Suggestions */}
      </section>
    </main>
  );
}

export default Feed;
