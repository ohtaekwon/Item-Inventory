import React from "react";
import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";

import { updateApplications } from "lib/apis/api/applications";
import { requestGet } from "lib/apis/utils/methods";
import { useInputReducer } from "hooks/app/useInputReducer";

import Section from "components/section";
import Text from "_common/components/text";
import Form from "_common/components/form";
import Box from "_common/components/box";
import Input from "_common/components/input";
import Button from "_common/components/button";
import Textarea from "_common/components/textarea";
import Grid from "_common/components/grid";
import useItems from "hooks/app/useItems";

type FormList = {
  id: string;
  text: string;
  title: string;
  tag: string;
}[];

const AddDocument = () => {
  const { id } = useParams();
  const [applyState, setApplyState] = useInputReducer({
    company: "",
    department: "",
  });
  const { add, update, _delete, items, setItems } = useItems("documents", {
    id: uuid(),
    text: "",
    title: "",
    tag: "",
  });
  // const [formList, setFormList] = React.useState<FormList>([]);

  // React.useEffect(() => {
  //   requestGet(`applications/${id}`).then((res) => {
  //     console.log("초기", { documents: res.documents });
  //     setItems({ documents: res.documents });
  //   });
  // }, []);

  // React.useEffect(() => {
  //   requestGet(`applications/${id}`).then((res) => {
  //     setFormList(res.documents);
  //   });
  // }, []);

  // const addForm = React.useCallback(() => {
  //   console.log("Form을 추가합니다.");
  //   setFormList((allForms) => {
  //     return [
  //       ...allForms,
  //       {
  //         id: uuid(),
  //         text: "",
  //         title: "",
  //         tag: "",
  //       },
  //     ];
  //   });
  // }, [formList, setFormList]);

  // const updateForm = React.useCallback(
  //   (id: string, data = {}) => {
  //     setFormList((allForms: any) => {
  //       const newFormList = [...allForms];
  //       const targetIndex = newFormList.findIndex((form) => form.id === id);
  //       if (targetIndex < 0) throw Error("없습니다.");
  //       newFormList.splice(targetIndex, 1, data);
  //       return newFormList;
  //     });
  //   },
  //   [formList, setFormList]
  // );

  // const deleteForm = React.useCallback(
  //   (id: string) => {
  //     console.log(`Form ${id} 을 삭제 중입니다...`);
  //     setFormList((allForms) => {
  //       const newFormList = [...allForms];
  //       const filteredData = newFormList.filter((data) => data.id !== id);
  //       onSave(filteredData);
  //       return filteredData;
  //     });
  //   },
  //   [formList, setFormList]
  // );

  // const onChangeForm = React.useCallback(
  //   (e: React.ChangeEvent<HTMLInputElement>, formId: string) => {
  //     setFormList((allForms) => {
  //       const newFormList = [...allForms];
  //       const targetIndex = newFormList.findIndex((form) => form.id === formId);
  //       if (targetIndex < 0) throw Error("없습니다.");
  //       newFormList[targetIndex][e.target.name as "title" | "text" | "tag"] =
  //         e.target.value;
  //       return newFormList;
  //     });
  //   },
  //   [formList, setFormList]
  // );

  const onSave = async (dataToSave: unknown = {}) => {
    console.log("저장하기", dataToSave);
    await updateApplications(id!, {
      apply: applyState,
      documents: (dataToSave as any)?.documents,
    });
  };

  const handleSubmit = () => {
    onSave(items);
  };

  console.log("items", items);
  return (
    <>
      <Section
        width="100%"
        height="100vh"
        margin="auto"
        display="flex"
        direction="column"
        paddingBottom={15}
        paddingRight={15}
        paddingLeft={15}
        paddingTop={15}
      >
        <Text fontSize="xxxl" fontWeight={700} textAlign="center">
          자소서 쓰기
        </Text>
        <Box width="100%" height="50px" display="flex">
          {/* <Button variant="zinc_200" onClick={add}>
            추가하기
          </Button> */}
          <Button variant="zinc_200" onClick={handleSubmit}>
            저장하기
          </Button>
        </Box>
        <Box width="200px" height="50px" display="flex" margin="0">
          <CompanySelect
            company={applyState.company}
            department={applyState.department}
            setCompanyInfo={setApplyState}
          />
        </Box>
        <Grid gridTemplateColumns="repeat(2, 1fr)">
          {/* <FormList
            list={items.documents}
            deleteForm={_delete}
            onChange={update}
          /> */}
        </Grid>
      </Section>
    </>
  );
};
export default AddDocument;

const CompanySelect = ({
  company,
  department,
  setCompanyInfo,
}: {
  company: string;
  department: string;
  setCompanyInfo: any;
}) => {
  return (
    <>
      <Form className="form__select">
        <Input
          type="text"
          name="company"
          placeholder="회사를 입력해주세요"
          className="input__company"
          // 스타일
          width="500px"
          backgroundColor="white"
          borderColor="vigreen_500"
          radius={8}
          value={company}
          onChange={setCompanyInfo}
        />
        <Input
          type="text"
          name="department"
          placeholder="부서를 입력해주세요"
          className="input__department"
          // 스타일
          width="500px"
          backgroundColor="white"
          borderColor="vigreen_500"
          radius={8}
          value={department}
          onChange={setCompanyInfo}
        />
      </Form>
    </>
  );
};

const FormList = ({
  list,
  deleteForm,
  onChange,
}: {
  list: { id: string; title: string; text: string; tag: string }[];
  deleteForm: (id: string) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
}) => {
  return (
    <>
      {list?.map((item: any, key: React.Key) => (
        <FormItem
          key={key}
          item={item}
          onDelete={deleteForm}
          onChange={onChange}
        />
      ))}
    </>
  );
};

const FormItem = ({
  item,
  onDelete,
  onChange,
}: {
  item: { title: string; text: string; tag: string; id: string };
  onDelete: (id: string) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e, item.id);
  };

  // 삭제 버튼
  const handleDelete = () => {
    onDelete(item.id);
  };
  return (
    <>
      <Box width="100%" height="100%" margin="auto">
        <Form
          id={item.id}
          className="form__item"
          style={{ position: "relative" }}
          height="auto"
        >
          <Box display="flex" height="100%" direction="column">
            <Input
              type="text"
              id="tag"
              name="tag"
              className="input__tag"
              value={item.tag}
              onChange={handleChange}
              placeholder="tag를 입력해주세요"
              // 스타일
              width="100%"
              height="50px"
              backgroundColor="white"
              borderColor="vigreen_500"
              radius={8}
            />
            <Input
              type="text"
              id="title"
              name="title"
              className="input__title"
              value={item.title}
              onChange={handleChange}
              placeholder="제목을 입력해주세요"
              // 스타일
              width="100%"
              height="50px"
              backgroundColor="white"
              borderColor="vigreen_500"
              radius={8}
            />
            <Textarea
              name="text"
              className="input__text"
              value={item.text}
              onChange={handleChange}
              placeholder="본문을 입력해주세요"
              // 스타일
              width="100%"
              height={400}
              margin="auto"
              fontSize="lg"
              fontWeight={500}
              paddingBottom={10}
              paddingLeft={10}
              paddingRight={10}
              paddingTop={30}
              backgroundColor="white"
              borderColor="vigreen_500"
            >
              {item.text}
            </Textarea>
            {/* {item.text.length || 0} 자 */}
            <Button
              type="button"
              variant="skyblue_300_fill"
              onClick={handleDelete}
            >
              삭제하기
            </Button>
          </Box>
        </Form>
      </Box>
    </>
  );
};

// const addForm = React.useCallback(() => {
//   console.log("Form을 추가합니다.");
//   setFormList((allForms: any) => {
//     return [
//       ...allForms,
//       {
//         id: uuid(),
//         text: "",
//         title: "",
//         tag: "",
//       },
//     ];
//   });
// }, [formList, setFormList]);

// const updateForm = React.useCallback(
//   (id: string, data = {}) => {
//     setFormList((allForms: any) => {
//       const newFormList = [...allForms];
//       const targetIndex = newFormList.findIndex((form) => form.id === id);
//       if (targetIndex < 0) throw Error("없습니다.");
//       newFormList.splice(targetIndex, 1, data);
//       return newFormList;
//     });
//   },
//   [formList, setFormList]
// );

// const deleteForm = React.useCallback(
//   (id: string) => {
//     console.log(`Form ${id} 을 삭제 중입니다...`);
//     setFormList((allForms) => {
//       const newFormList = [...allForms];
//       const filteredData = newFormList.filter((data) => data.id !== id);
//       onSave(filteredData);
//       return filteredData;
//     });
//   },
//   [formList, setFormList]
// );

// const onChangeForm = React.useCallback(
//   (e: React.ChangeEvent<HTMLInputElement>, formId: string) => {
//     setFormList((allForms) => {
//       const newFormList = [...allForms];
//       const targetIndex = newFormList.findIndex((form) => form.id === formId);
//       if (targetIndex < 0) throw Error("없습니다.");
//       newFormList[targetIndex][e.target.name as "title" | "text" | "tag"] =
//         e.target.value;
//       return newFormList;
//     });
//   },
//   [formList, setFormList]
// );

// const updateDocuments = async () => {
//   const inputs: any = Array.from(document.querySelectorAll("input"));
//   const forms: any = document.getElementsByClassName("form__item");
//   let apply: any = {};
//   let documents: any = [];
//   /**
//    * company, department 입력
//    */
//   for await (let inputItem of inputs.slice(0, 2)) {
//     apply[inputItem.name] = inputItem.value;
//   }
//   /**
//    * title, text, tag 입력
//    */
//   for (let i = 0; i < forms.length; i++) {
//     let newObj: any = {};
//     for (let j = 0; j < 3; j++) {
//       newObj.id = forms[i].id;
//       newObj[forms[i][j].name] = forms[i][j].value;
//     }
//     documents.push(newObj);
//   }

//   console.log("update", apply, documents);
//   await updateApplications(id!, { apply: companyInfo, documents: formList });
// };

// const initState = {
//   id: item.id,
//   tag: item.tag,
//   title: item.title,
//   text: item.text,
// };

// const [documentInfo, setDocumentInfo] = useUserFormInput(initState);

// const handleUpdate = () => {
//   onUpdate(item.id, {
//     id: item.id,
//     tag: item.tag,
//     title: item.title,
//     text: item.text,
//   });
// };

// React.useEffect(() => {
//   // handleChange();
// }, [item]);
