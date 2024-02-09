import React from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteApi, getApi } from "../api";
import useOldDataStore from "../store/tableData";
import useFormDataStore from "../store/formData";
import Loader from "../shared/Loader";

function TableData() {
  const navigate = useNavigate(null);
  const formData = useFormDataStore((state) => state.formData);

  const [tableData, setTableData] = useOldDataStore((state) => [
    state.tableData,
    state.setTableData,
  ]);

  const setFormData = useFormDataStore((state) => state.setFormData);
  // Get Data in Table
  const {
    data: getApiData,
    refetch,
    isLoading: isFetching,
  } = useQuery(["getdata"], getApi, {
    onSuccess: (response) => {
      setTableData(response);
    },
  });

  // Delete Data in Table
  const { mutate: deleteMutation, isLoading: isDeleting } = useMutation(
    deleteApi,
    {
      onSuccess: () => {
        setTableData(getApiData);
        toast.success("Data deleted successfully!");
        refetch();
      },
      onError: () => {
        toast.error("An error occurred while submitting the form.");
      },
    }
  );

  const handleDetete = (id) => {
    deleteMutation(id);
  };

  const handleEdit = (data) => {
    setFormData(data);
    navigate("/form-data");
  };

  const handleData = () => {
    navigate("/form-data");
    formData.id = "";
  };

  return (
    <div className="container">
      <div className="card w-full">
        <h4 className="heading">Table Data</h4>
        <div className="add">
          <button className="btn-primary" onClick={handleData}>
            + Add data
          </button>
        </div>
        {isFetching || isDeleting ? (
          <Loader />
        ) : (
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {tableData &&
                tableData.map((data) => {
                  return (
                    <tr key={data.id}>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.age}</td>
                      <td>
                        <button
                          className="btn-primary"
                          onClick={() => handleEdit(data)}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn-primary"
                          onClick={() => handleDetete(data.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default TableData;
