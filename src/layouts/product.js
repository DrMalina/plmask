import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import Layout from './index';
import SEO from '../components/seo';

const ProductLayout = ({ data: { productsJson } }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isLighboxOpen, setIsLightboxOpen] = useState(false);
  const images = [...productsJson.images];

  const changeImg = direction => {
    if (direction === 'next') {
      if (photoIndex < images.length - 1) {
        setPhotoIndex(photoIndex + 1);
      } else {
        setPhotoIndex(0);
      }
    } else if (direction === 'previous') {
      if (photoIndex > 0) {
        setPhotoIndex(photoIndex - 1);
      } else {
        setPhotoIndex(images.length - 1);
      }
    }
  };

  return (
    <Layout>
      <SEO title={productsJson.name} />
      <div className="mx-auto p-4 mt-4 md:p-8 mb-2 text-sm lg:text-base lg:mb-4 max-w-screen-lg">
        <h1 className="font-heading font-bold text-3xl">Produkty</h1>
        <Link to="/produkty" className="italic inline-block mt-2">
          <span aria-hidden="true">&#8592;</span> Powrót do wszystkich produktów
        </Link>
        <div className="grid grid-cols-2 gap-20 mt-8">
          <section className="col-span-1 flex flex-col">
            <div className="grid grid-cols-10">
              <div className="h-full flex justify-start items-center text-gray-700 col-span-2">
                <button
                  className="w-1/2 py-4 flex justify-start items-center"
                  onClick={() => changeImg('previous')}
                >
                  <span className="sr-only">Poprzednie zdjęcie</span>
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 492 492"
                    aria-hidden="true"
                  >
                    <title>Poprzednie zdjęcie</title>
                    <path d="M198.608 246.104L382.664 62.04c5.068-5.056 7.856-11.816 7.856-19.024 0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12C361.476 2.792 354.712 0 347.504 0s-13.964 2.792-19.028 7.864L109.328 227.008c-5.084 5.08-7.868 11.868-7.848 19.084-.02 7.248 2.76 14.028 7.848 19.112l218.944 218.932c5.064 5.072 11.82 7.864 19.032 7.864 7.208 0 13.964-2.792 19.032-7.864l16.124-16.12c10.492-10.492 10.492-27.572 0-38.06L198.608 246.104z" />
                  </svg>
                </button>
              </div>
              <button
                className="w-full h-80 overflow-hidden col-span-6 flex items-center"
                onClick={() => setIsLightboxOpen(true)}
              >
                <span className="sr-only">Powiększ zdjęcie</span>
                <Image
                  className="w-full h-auto"
                  fluid={images[photoIndex].childImageSharp.fluid}
                />
              </button>
              <div className="h-full flex justify-end items-center text-gray-700 col-span-2">
                <button
                  className="w-1/2 py-4 flex justify-end items-center"
                  onClick={() => changeImg('next')}
                >
                  <span className="sr-only">Następne zdjęcie</span>
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 492.004 492.004"
                    aria-hidden="true"
                  >
                    <title>Następne zdjęcie</title>
                    <path d="M382.678 226.804L163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z" />
                  </svg>
                </button>
              </div>
            </div>
            <div
              className={`grid ${
                images.length < 4 ? 'grid-cols-3' : 'grid-cols-4'
              } gap-2 mt-2 px-12`}
            >
              {productsJson.images.map((img, idx) => (
                <button
                  className="w-full h-24 flex flex-grow"
                  key={idx}
                  onClick={() => setPhotoIndex(idx)}
                >
                  <Image
                    className={
                      productsJson.name.includes('Spray')
                        ? 'w-1/2 mx-auto'
                        : 'w-full'
                    }
                    fluid={img.childImageSharp.fluid}
                  />
                </button>
              ))}
            </div>
          </section>
          <section className="col-span-1 text-right">
            <h2 className="font-bold text-xl">{productsJson.name}</h2>
            <p className="text-gray-800 text-sm mt-6">
              {productsJson.description}
            </p>
          </section>
        </div>
        {isLighboxOpen && (
          <Lightbox
            mainSrc={images[photoIndex].childImageSharp.fluid.src}
            nextSrc={
              images[(photoIndex + 1) % images.length].childImageSharp.fluid.src
            }
            prevSrc={
              images[(photoIndex + images.length - 1) % images.length]
                .childImageSharp.fluid.src
            }
            onCloseRequest={() => setIsLightboxOpen(false)}
            onMovePrevRequest={() => changeImg('previous')}
            onMoveNextRequest={() => changeImg('next')}
          />
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query queryProduct($slug: String!) {
    productsJson(slug: { eq: $slug }) {
      name
      description
      images {
        childImageSharp {
          fluid(quality: 90) {
            src
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`;

export default ProductLayout;
