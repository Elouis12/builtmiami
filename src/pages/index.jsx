import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Client } from '@/lib/contentful'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

// Integrated homepage sections
import { CTA } from '@/components/home/CTA'
import { NavBar } from '@/components/home/NavBar'
import { Accelerator } from '@/components/home/Accelerator'
import { ZerotoOne } from '@/components/home/ZerotoOne'
import { BuilderSummer } from '@/components/home/BuilderSummer'
import { Hero } from '@/components/home/Hero'
import { Mission } from '@/components/home/Mission'
import { Program } from '@/components/home/Program'
import avatarImage1 from '@/images/primer/avatars/avatar-1.png'
import avatarImage2 from '@/images/primer/avatars/avatar-2.png'



export async function getStaticProps() {
  
  const home = await Client.getEntry('12EXM10vwyqdjNJYxHoq6X', {include : 3})
  
  return {
    props: {
      home : home,
      hero : home.fields.hero,
      mission : home.fields.mission,
      summer : home.fields.builderSummer,
      sprint : home.fields.zeroToOne,
      accelerator : home.fields.accelerator,
      action : home.fields.ctaSection,
    },
  }
}

export default function Home({ mission, hero, summer, sprint, accelerator, action }) {
  return (
    <>
      <Head>
        <title>
          Built in Miami - The Miami Startup Initiative
        </title>
        <meta
          name="description"
          content="The Built in Miami Innovation Series is a year-long initiative to support early stage entrepreneurs in Miami."
        />
      </Head>
      <Hero hero={hero} />
      <Mission mission={mission} />
      {/* <NavBar /> */}
      <ZerotoOne sprint={sprint} />
      <BuilderSummer summer={summer} />
      <Accelerator accelerator={accelerator}/>
      <CTA action={action}/>
      {/* <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container> */}
      {/* <Program /> */}
    </>
  )
}


