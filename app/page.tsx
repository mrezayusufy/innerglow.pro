"use client";
import { Fragment } from "react";
import { DownloadApp, Blog, Features, Hero, Services } from "./components";
import Members from "./components/members";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Features/>
      <Services/>
      <Members/>
      <DownloadApp/>
      <Blog/>
    </Fragment>
  );
}
