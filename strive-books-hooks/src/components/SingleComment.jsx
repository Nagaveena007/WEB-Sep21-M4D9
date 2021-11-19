import { Button, ListGroup } from "react-bootstrap";
import { RiDeleteBin6Fill } from "react-icons/ri";
const deleteComment = async (asin) => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + asin,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODk0ZGFhY2FhMjAwMTU1MmExNjMiLCJpYXQiOjE2MzcyNDQ1NjksImV4cCI6MTYzODQ1NDE2OX0.AD4TW8bRFhxmk9LhiA4t4Ue5P1kS6KSGk4QbaEWqTdU",
        },
      }
    );
    if (response.ok) {
      alert("comment deleted!");
    } else {
      alert("comment NOT deleted!");
    }
  } catch (error) {
    alert("comment NOT deleted!");
  }
};

const SingleComment = ({ comment }) => (
  <ListGroup.Item>
    {comment.comment}
    <Button variant="danger" className="ml-4">
      <RiDeleteBin6Fill onClick={() => deleteComment(comment._id)} />
    </Button>
  </ListGroup.Item>
);

export default SingleComment;
