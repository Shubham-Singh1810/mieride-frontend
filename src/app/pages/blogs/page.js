"use client";
import React, { useState, useEffect } from "react";
import {
  getBlogCategoryListServ,
  getBlogListServ,
} from "../../services/blog.services";
import { Image_Base_Url } from "../../utils/api_base_url_configration";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/navigation";
import moment from "moment";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function page() {
  const router = useRouter();
  const [categoryList, setCategoryList] = useState([]);
  const [blogList, setBlogList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingCategories, setLoadingCategories] = useState(true);

  const [payload, setPayload] = useState({
    category_id: "All",
  });

  const getBlogCategoryListFunc = async () => {
    try {
      setLoadingCategories(true);
      let response = await getBlogCategoryListServ();
      if (response?.data?.statusCode == "200") {
        setCategoryList(response?.data?.data);
      }
    } catch (error) {
    } finally {
      setLoadingCategories(false);
    }
  };

  const getBlogListFunc = async () => {
    try {
      setLoading(true);
      let response = await getBlogListServ(
        payload?.category_id != "All" ? payload : {}
      );
      if (response?.data?.statusCode == "200") {
        setBlogList(response?.data?.data);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogListFunc();
    getBlogCategoryListFunc();
  }, []);

  useEffect(() => {
    getBlogListFunc();
  }, [payload?.category_id]);

  return (
    <div className="mainDiv">
      <div className="homepage">
        <Navbar selectedItem="Blogs" />

        <div className="blogsMain">
          {/* --- Latest Blog --- */}
          <div className="row">
            <div className="col-12 order-md-1 order-2 col-md-6 my-auto">
              <h3 className="d-none d-md-block">
                {loading ? <Skeleton width="80%" height={30} /> : blogList[0]?.title}
              </h3>
              <p>
                {loading ? (
                  <Skeleton count={3} />
                ) : (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: blogList[0]?.short_description,
                    }}
                  />
                )}
              </p>
              <span>
                {loading ? <Skeleton width={100} /> : moment(blogList[0]?.created_at).format("MMM DD, YYYY")}
              </span>
              <div>
                {!loading && blogList[0]?.id && (
                  <button onClick={() => router.push("/pages/blogs/" + blogList[0]?.id)}>
                    Read More
                  </button>
                )}
              </div>
            </div>

            <div className="col-12 order-md-2 order-1 col-md-6 ">
              <div className="aboutHeroImg">
                <h3 className="d-block d-md-none">Latest Insight</h3>
                {loading ? (
                  <Skeleton height={250} />
                ) : (
                  <img src={Image_Base_Url + blogList[0]?.image} />
                )}
              </div>
            </div>
          </div>

          {/* --- Category Buttons --- */}
          <div className="d-flex my-md-5 my-4 flex-wrap gap-2">
            {loadingCategories ? (
              <>
                <Skeleton width={70} height={30} />
                <Skeleton width={90} height={30} />
                <Skeleton width={60} height={30} />
              </>
            ) : (
              <>
                <div
                  onClick={() => setPayload({ ...payload, category_id: "All" })}
                  style={{ cursor: "pointer" }}
                  className={"categoryItem " + (payload?.category_id == "All" && " activeItem")}
                >
                  <p>All</p>
                </div>
                {categoryList?.map((v, i) => {
                  return (
                    <div
                      key={i}
                      onClick={() => setPayload({ ...payload, category_id: v?.id })}
                      style={{ cursor: "pointer" }}
                      className={"categoryItem " + (payload?.category_id == v?.id && " activeItem")}
                    >
                      <p>{v?.name}</p>
                    </div>
                  );
                })}
              </>
            )}
          </div>

          {/* --- Blog Cards --- */}
          <div className="row">
            {loading
              ? Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <div className="col-6 col-md-6 col-lg-4" key={i}>
                      <div className="blogCart shadow">
                        <Skeleton height={180} />
                        <div className="p-md-3 p-1">
                          <Skeleton count={2} />
                          <Skeleton width={100} />
                        </div>
                      </div>
                    </div>
                  ))
              : blogList?.map((v, i) => {
                  return (
                    <div className="col-6 col-md-6 col-lg-4" key={i}>
                      <div
                        className="blogCart shadow"
                        onClick={() => router.push("/pages/blogs/" + v?.id)}
                      >
                        <img src={Image_Base_Url + v?.image} />
                        <div className="p-md-3 p-1">
                          <p
                            dangerouslySetInnerHTML={{
                              __html: v?.short_description,
                            }}
                          />
                          <div className="my-md-2 my-0">
                            <span>
                              {moment(v?.created_at).format("MMM DD, YYYY")}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
