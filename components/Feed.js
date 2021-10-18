import React from "react";
import MiniProfile from "./MiniProfile.js";
import Posts from "./Posts.js";
import Stories from "./Stories.js";
import Suggestions from "./Suggestions.js";

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
      <section className="hidden xl:inline-grid md:col-span-1">
        {/* mini Profile  */}
        <MiniProfile />
        {/* Suggestions */}
        <Suggestions />
      </section>
    </main>
  );
}

export default Feed;
