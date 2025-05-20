export function LoadAndReset({
  onChange,
  setGenIsOpen,
  setExpIsOpen,
  setEduIsOpen,
}) {
  return (
    <div className="loadAndReset">
      <button
        className="clearForms"
        onClick={() => {
          setGenIsOpen(false);
          setExpIsOpen({
            dropdown: false,
            form: false,
            overview: true,
          });
          setEduIsOpen({
            dropdown: false,
            form: false,
            overview: true,
          });
          onChange({
            generalInfo: {
              fullName: '',
              email: '',
              homeLocation: '',
              phoneNum: '',
              generalAbout: '',
            },
            education: [],
            experience: [],
          });
        }}
      >
        clear all
      </button>
      <button
        className="loadExample"
        onClick={() => {
          setGenIsOpen(false);
          setExpIsOpen({
            dropdown: false,
            form: false,
            overview: true,
          });
          setEduIsOpen({
            dropdown: false,
            form: false,
            overview: true,
          });
          onChange({
            generalInfo: {
              fullName: 'John Doe',
              email: 'JohnDoe@gmail.com',
              homeLocation: '1600 Pennsylvania Ave NWWashington, DC 20500',
              phoneNum: '202-456-1111',
              generalAbout: 'I am John Doe',
            },
            education: [
              {
                schoolName: 'Harvard',
                subject: 'MSc in Computer Science',
                eduStartDate: '2016-02-01',
                eduEndDate: '2021-01-07',
                aboutStudy: '',
                studyLocation: 'Massachusetts Hall, Cambridge, MA 02138, USA',
                listId: 0,
                visible: true,
                editing: false,
              },
            ],
            experience: [
              {
                companyName: 'Google',
                positionTitle: 'Software engineer',
                expStartDate: '2022-01-01',
                expEndDate: '2023-06-17',
                currentJob: false,
                positionResponsibilities: 'seo algorithm engineer',
                companyLocation: 'Mountain View, California, Usa',
                listId: 0,
                visible: true,
                editing: false,
              },
              {
                companyName: 'Amazon',
                positionTitle: 'Software engineer',
                expStartDate: '2024-03-02',
                expEndDate: '2025-05-20',
                currentJob: true,
                positionResponsibilities: 'aws database optimization',
                companyLocation: 'Seattle, Washington, Usa',
                listId: 1,
                visible: true,
                editing: false,
              },
            ],
          });
        }}
      >
        load example
      </button>
    </div>
  );
}
