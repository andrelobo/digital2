import { blogdata } from "@/assets/data/dummydata";
import BlogCard from "@/components/BlogCard";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import React from "react";

const Blog = () => {
  return (
    <>
      <section className='blog bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='BLOG' /> <br />
            <br />
            <Title title='Nossas visões sobre marketing, design e tecnologia' />
          </div>
          {/* Aqui você pode mapear os dados do blogdata para renderizar os cards */}
          {blogdata.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              cover={post.cover}
              category={post.catgeory}
              date={post.date}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
