import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const router = useRouter();

  const handleDelete = async (id) => {
    const cf = window.confirm(`Are u sure to delete post ID ${id} ?`);
    if (cf) {
      await axios.delete("http://localhost:8080/posts/" + id);
      router.replace(router.asPath);
    }
  };

  return (
    <>
      <div className=" container my-3">
        <Link href="/posts/new" className=" btn btn-outline-info mb-3">
          Create
        </Link>
        <table className=" table">
          <thead className=" table-dark">
            <tr>
              <td>No.</td>
              <td>ID Num</td>
              <td>Title</td>
              <td>Category</td>
              <td>Time</td>
              <td>Action</td>
              <td>Action</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {props.data.map((el, index) => {
              return (
                <tr key={`key_${el.id}`}>
                  <td>{index + 1}</td>
                  <td>{el.id}</td>
                  <td>{el.title}</td>
                  <td>{el.category}</td>
                  <td>{el.updatedAt}</td>
                  <td>
                    <Link
                      href={{
                        pathname: "/posts/update",
                        query: { id: el.id },
                      }}
                      className=" btn btn-dark"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(el.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <Link
                      href={{
                        pathname: "/posts/update",
                        query: { id: el.id, details: true },
                      }}
                      className=" btn btn-info"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const response = await axios.get("http://localhost:8080/posts");

  return {
    props: {
      data: response.data,
    },
  };
}
