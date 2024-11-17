"use client";
// dynamic, these need to be ‘tagged’ as ‘edge functions.
export const runtime = "edge";

// an array of objects where each object represents a news post
import { postsValues } from "../../data/posts";
//import { use } from "react"; - no longer required see below

// get the useTheme function from ThemeContext component
import { useTheme } from "../../context/ThemeContext";

// import necessary components
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Container from "../../components/Container";

// display the current Post title , using details provided through the post prop
const BlogHeader = ({ post }) => {
  return (
    <div
      className="parallax colored-bg pattern-bg"
      data-stellar-background-ratio="0.5"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="page-title">{post.title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

// display the current Post content  , using details provided through the post prop
const BlogMain = ({ post }) => {
  return (
    // <!-- BEGIN MAIN CONTENT -->
    <div className="main col-sm-8">
      <h1 className="blog-title">{post.title}</h1>

      <div className="blog-main-image">
        <img src={post.imgUrl} alt="" />
        <div className="tag">
          <i className="fa fa-file-text"></i>
        </div>
      </div>

      <div className="blog-bottom-info">
        <ul>
          <li>
            <i className="fa fa-calendar"></i> {post.date}
          </li>
        </ul>

        <div id="post-author">
          <i className="fa fa-pencil"></i> By {post.author}
        </div>
      </div>

      <div className="post-content">
        <div className="highlight-bold">{post.text}</div>

        <div className="divider"></div>

        <p className="quote">
          Vivamus suscipit <span>magna eu</span> turpis facilisis ornare.
          Aliquam ac ipsum dui. Nulla tincidunt orci nec elit dictum euismod ut
          lectus <span>ultricies mollis</span> pellentesque.
        </p>
      </div>

      <div className="share-wraper col-sm-12 clearfix">
        <h5>Share this Post:</h5>
        <ul className="social-networks">
          <li>
            <a
              target="_blank"
              href="http://www.facebook.com/sharer.php?s=100&amp;p%5Burl%5D=http%3A%2F%2Fwww.wiselythemes.com%2Fhtml%2Fcozy%2Fblog-detail.html%3Ffb%3Dtrue&amp;p%5Bimages%5D%5B0%5D=http%3A%2F%2Fwww.wiselythemes.com%2Fhtml%2Fcozy%2Fimages%2Fnews-img1.jpg&amp;p%5Btitle%5D=Cozy%20Blog%20Post"
            >
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://twitter.com/intent/tweet?url=http://www.wiselythemes.com/html/cozy/blog-detail.html&amp;text=Cozy%20Blog%20Post"
            >
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://plus.google.com/share?url=http://www.wiselythemes.com/html/cozy/blog-detail.html"
            >
              <i className="fa fa-google"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="http://pinterest.com/pin/create/button/?url=http://www.wiselythemes.com/html/cozy/blog-detail.html&amp;description=Cozy%20Blog%20Post&amp;media=http%3A%2F%2Fwww.wiselythemes.com%2Fhtml%2Fcozy%2Fimages%2Fnews-img1.jpg"
            >
              <i className="fa fa-pinterest"></i>
            </a>
          </li>
          <li>
            <a href="mailto:?subject=Check%20out%20this%20blog%20post%20from%20Cozy%20Real%20Estate!&amp;body=http://www.wiselythemes.com/html/cozy/blog-detail.html">
              <i className="fa fa-envelope"></i>
            </a>
          </li>
        </ul>

        <a className="print-button" href="javascript:window.print();">
          <i className="fa fa-print"></i>
        </a>
      </div>
    </div>
    // <!-- END MAIN CONTENT -->
  );
};

const BlogSideBar = () => {
  return (
    // <!-- BEGIN SIDEBAR -->
    <div className="sidebar gray col-sm-4">
      <h2 className="section-title">Categories</h2>
      <ul className="categories">
        <li>
          <a href="/">
            Business <span>(2)</span>
          </a>
        </li>
        <li>
          <a href="/">
            Commercial <span>(1)</span>
          </a>
        </li>
        <li>
          <a href="/">
            Land <span>(3)</span>
          </a>
        </li>
        <li>
          <a href="/">
            Loans <span>(2)</span>
          </a>
        </li>
        <li>
          <a href="/">
            News and Updates <span>(6)</span>
          </a>
        </li>
        <li>
          <a href="/">
            Properties for Sale <span>(1)</span>
          </a>
        </li>
        <li>
          <a href="/">
            Real Estate <span>(1)</span>
          </a>
        </li>
      </ul>

      {/* <!-- BEGIN ARCHIVES ACCORDION --> */}
      <h2 className="section-title">Archives</h2>
      <div id="accordion" className="panel-group blog-accordion">
        <div className="panel">
          <div className="panel-heading">
            <div className="panel-title">
              <a
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseOne"
                className=""
              >
                <i className="fa fa-chevron-right"></i> 2014 (15)
              </a>
            </div>
          </div>
          <div id="collapseOne" className="panel-collapse collapse in">
            <div className="panel-body">
              <ul>
                <li>
                  <a href="/">July (3)</a>
                </li>
                <li>
                  <a href="/">June (4)</a>
                </li>
                <li>
                  <a href="/">May (1)</a>
                </li>
                <li>
                  <a href="/">April (2)</a>
                </li>
                <li>
                  <a href="/">March (3)</a>
                </li>
                <li>
                  <a href="/">February (1)</a>
                </li>
                <li>
                  <a href="/">January (1)</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="panel">
          <div className="panel-heading">
            <div className="panel-title">
              <a
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseTwo"
                className="collapsed"
              >
                <i className="fa fa-chevron-right"></i> 2013 (6)
              </a>
            </div>
          </div>
          <div id="collapseTwo" className="panel-collapse collapse">
            <div className="panel-body">
              <ul>
                <li>
                  <a href="/">May (1)</a>
                </li>
                <li>
                  <a href="/">April (2)</a>
                </li>
                <li>
                  <a href="/">March (1)</a>
                </li>
                <li>
                  <a href="/">February (2)</a>
                </li>
                <li>
                  <a href="/">January (1)</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="panel">
          <div className="panel-heading">
            <div className="panel-title">
              <a
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseThree"
                className="collapsed"
              >
                <i className="fa fa-chevron-right"></i> 2012 (5)
              </a>
            </div>
          </div>
          <div id="collapseThree" className="panel-collapse collapse">
            <div className="panel-body">
              <ul>
                <li>
                  <a href="/">April (1)</a>
                </li>
                <li>
                  <a href="/">March (1)</a>
                </li>
                <li>
                  <a href="/">February (2)</a>
                </li>
                <li>
                  <a href="/">January (1)</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- END  ARCHIVES ACCORDION --> */}

      {/* <!-- BEGIN TAGS --> */}
      <h2 className="section-title">Tags</h2>
      <ul className="tags col-sm-12">
        <li>
          <a href="/">Apartments</a>
        </li>
        <li>
          <a href="/">Residential</a>
        </li>
        <li>
          <a href="/">News</a>
        </li>
        <li>
          <a href="/">Real estate</a>
        </li>
        <li>
          <a href="/">Land</a>
        </li>
        <li>
          <a href="/">Business</a>
        </li>
        <li>
          <a href="/">Villas</a>
        </li>
        <li>
          <a href="/">Loans</a>
        </li>
        <li>
          <a href="/">Commercial</a>
        </li>
        <li>
          <a href="/">Rent</a>
        </li>
      </ul>
      {/* <!-- BEGIN TAGS --> */}
    </div>
    // <!-- END SIDEBAR -->
  );
};
const BlogPage = ({ params }) => {
  //pull the theme variable from the context

  const { theme } = useTheme();
  //  extract the id parameter from params
  // the id is coming from the url

  //for some reason i had to have use() when i was using latest version of react
  //const { id } = use(params);

  const { id } = params;

  // Locate the Matching Post
  let post = postsValues.find((item) => {
    return item.id == id;
  });

  return (
    <main
      //Adjust the colors according to the theme
      className={`${
        theme == "light" ? "bg-light text-dark" : "bg-dark text-light"
      }`}
    >
      <Header />
      <BlogHeader post={post} />
      <Container>
        <BlogMain post={post} />
        <BlogSideBar />
      </Container>
      <Footer />
    </main>
  );
};

export default BlogPage;
