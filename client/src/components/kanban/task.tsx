import React from "react";
import Box from "_common/components/box";
import Button from "_common/components/button";
import { TaskModel } from "./models";

import { RiDeleteBin6Line } from "react-icons/ri";
import Textarea from "_common/components/textarea";
import useAutoHeightTextarea from "hooks/useAutoHeightTextarea";
import useTaskDragAndDrop from "hooks/useTaskDragAndDrop";

type TaskProps = {
  index: number;
  task: TaskModel;
  onDelete: (id: TaskModel["id"]) => void;
  onUpdate: (id: TaskModel["id"], updatedTask: TaskModel) => void;
};
const Task = ({
  index,
  task,
  onDelete: handleDelete,
  onUpdate: handleUpdate,
}: TaskProps) => {
  const { ref, isDragging } = useTaskDragAndDrop<HTMLElement>({
    task,
    index,
  });

  const {
    textAreaRef,
    lineHeight,
    checkItemChangeHandler,
    checkItemEnterHandler,
  } = useAutoHeightTextarea();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTitle = e.target.value;
    handleUpdate(task.id, { ...task, title: newTitle });
    console.log(e.target.value.length);
    checkItemChangeHandler(e);
  };

  const handleDeleteClick = () => {
    handleDelete(task.id);
  };
  // lineHeight * 27 + 60
  // console.log(lineHeight * 30);
  return (
    <Box
      ref={ref}
      as="div"
      role="group"
      position="relative"
      display="flex"
      width="200px"
      height="70px"
      backgroundColor={task.color}
      cursor="grab"
      opacity={isDragging ? 0.5 : 1}
    >
      <Button
        aria-label="delete-task"
        variant="default"
        position="absolute"
        zIndex={100}
        areaLabel="delete"
        top={0}
        right={0}
        onClick={handleDeleteClick}
      >
        <RiDeleteBin6Line />
      </Button>
      <Textarea
        width="100px"
        height={lineHeight * 27 + 60}
        margin="auto"
        textAlign="center"
        ref={textAreaRef}
        value={task.title}
        onChange={handleChange}
        onKeyDown={() => checkItemEnterHandler}
      >
        {task.title}
      </Textarea>
    </Box>
  );
};
export default Task;
