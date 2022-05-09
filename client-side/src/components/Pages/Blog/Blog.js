import React from 'react';
import { Card } from 'react-bootstrap';
import blog1 from "../../../images/blog1.jpg";
import blog2 from "../../../images/blog2.png";
import blog3 from "../../../images/blog3.jpg";
import blog4 from "../../../images/blog4.png";

const Blog = () => {
    return (
        <div className="container mt-5">
        <>
          <Card>
            <Card.Img
              style={{ height: "400px", weight: "180px" }}
              variant="top"
              src={blog1}
            />
            <Card.Body>
              <Card.Text>
                <h1>Difference between javascript and nodejs?</h1>
                <h3>The Core Difference Explained</h3>
                <span className="text-info">Node Js</span> is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. {" "}
                <br/> <br/>
                <span className="text-info">Javascript</span> is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. 
                <br/>
                <p>Javascript can only be run in the browsers.We can run Javascript outside the browser with the help of NodeJS. and Javascript is basically used on the client-side. Node js is mostly used on the server-side.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Card.Img mt-3 variant="top" src={blog2} />
          <Card.Body>
            <Card.Text>
              <h1>
              When should you use nodejs and when should you use mongodb?
              </h1>
              <h4>
              When should you use nodejs:
              </h4>
              <ul>
                <li> If your server side code requires very few cpu cycles. In other world you are doing non blocking operation and does not have heavy algorithm/Job which consumes lots of CPU cycles.</li>
                <li> If you are from Javascript back ground and comfortable in writing Single Threaded code just like client side JS.</li>
                <li> Node.JS itself does not utilize all core of underlying system and it is single threaded by default, you have to write logic by your own to utilize multi core processor and make it multi threaded.</li>
              </ul>
              <br/>
              <h4>
              When should you use mongodb?:
              </h4>
              <ul>
                <li> Massive-scale Data</li>
                <li> Caching and High Availability</li>
                <li> Rapid Prototyping</li>
                <li> Streaming Feeds</li>
                <li> Content Management and Cataloging</li>
                <li> Sailing Into the Future</li>
                <li> Documents hold semistructured data, usually represented in a format like JSON or XML, and each document is associated with a unique key.</li>
                <li> Key values are typically a path or a URI that can be used to retrieve the associated document from the database.</li>
                <li> The keys are indexed, making it efficient to retrieve the associated documents.</li>
                
              </ul>
            </Card.Text>
          </Card.Body>
  
          <Card>
            <Card.Body>
              <Card.Text>
                <h1>
                  {" "}
                  Differences between sql and nosql databases?
                </h1>
                <br/>
                <h2>SQL</h2>
                Structured Query language (SQL) pronounced as “S-Q-L” or sometimes as “See-Quel” is the standard language for dealing with Relational Databases. A relational database defines relationships in the form of tables.
                SQL programming can be effectively used to insert, search, update, delete database records.
                That doesn’t mean SQL cannot do things beyond that. It can do a lot of things including, but not limited to, optimizing and maintenance of databases.
                Relational databases like MySQL Database, Oracle, Ms SQL Server, Sybase, etc. use SQL.
                <br />
                <br />
                <h2>NoSQL</h2>
                NoSQL is a non-relational DMS, that does not require a fixed schema, avoids joins, and is easy to scale. NoSQL database is used for distributed data stores with humongous data storage needs. NoSQL is used for Big data and real-time web apps. For example companies like Twitter, Facebook, Google that collect terabytes of user data every single day.
              </Card.Text>
            </Card.Body>
            <Card.Img
              style={{ height: "400px", weight: "180px" }}
              variant="bottom"
              src={blog3}
            />
          </Card>
          <Card className="mt-3">
            <Card.Body>
              <Card.Text>
                <h1>
                  {" "}
                  What is the purpose of jwt and how does it work?
                </h1>
                In short, JWTs are used as a secure way to authenticate users and share information.Typically, a private key, or secret, is used by the issuer to sign the JWT. The receiver of the JWT will verify the signature to ensure that the token hasn’t been altered after it was signed by the issuer. It is difficult for unauthenticated sources to guess the signing key and attempt to change the claims within the JWT.
                <br />
                <br />
                <h2>How JWT Works</h2>
                JWTS differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                Once decoded, you will get two JSON strings:
                <ul>
                    <li>The header and the payload. </li>
                    <li>The signature.</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Img
              style={{ height: "400px", weight: "200px" }}
              variant="bottom"
              src={blog4}
              className="mb-1"
            />
          </Card>
        </>
      </div>
    );
};

export default Blog;