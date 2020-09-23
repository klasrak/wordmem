import { useFormik } from "formik";
import React from "react";
import { Word } from "../data/fetchWords";

type EditWordFormProps = {
  isOpen: boolean;
  initialWord?: Word;
  onClose(): void;
  onFormSubmitted(values: any): void;
};

const EditWordForm: React.FC<EditWordFormProps> = ({
  isOpen,
  initialWord,
  onClose,
  onFormSubmitted,
}) => {
  const formik = useFormik({
    initialValues: {
      word: initialWord?.word || "",
      definition: initialWord?.word || "",
      refUrl: initialWord?.refUrl || "",
      startDate: initialWord?.startDate.substr(0, 10) || "", // substring gets YYYY-MM-DD out of date string
    },
    onSubmit: (values) => {
      onFormSubmitted(values);
    },
  });
  return (
    <div className={`modal${isOpen ? " is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">
            {initialWord ? "Modify Word" : "Create Word"}
          </p>
          <button
            onClick={onClose}
            className="delete"
            aria-label="close"
          ></button>
        </header>
        <form onSubmit={formik.handleSubmit}>
          <section className="modal-card-body">
            <div className="field">
              <label htmlFor="word" className="label">
                Word
              </label>
              <div className="control">
                <input
                  id="word"
                  name="word"
                  className="input is-rounded"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.word}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Definition</label>
              <div className="control">
                <textarea
                  id="definition"
                  name="definition"
                  className="textarea"
                  rows={4}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.definition}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Reference URL</label>
              <div className="control">
                <input
                  id="refUrl"
                  name="refUrl"
                  className="input is-rounded"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.refUrl}
                />
              </div>
            </div>
            {initialWord && (
              <div className="field">
                <label className="label">Change Start Date</label>
                <div className="control">
                  <input
                    id="startDate"
                    name="startDate"
                    className="input is-rounded"
                    type="date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.startDate}
                  />
                </div>
              </div>
            )}
          </section>
          <footer className="modal-card-foot">
            <button type="submit" className="button is-info">
              Save changes
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default EditWordForm;
