import Head from "next/head";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PokemonID: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>{id}</div>;
};

export default PokemonID;
