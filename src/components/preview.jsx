function ResumeExpBlock({ info, id }) {
  return (
    <div className="resumeExpBlock">
      <div className="resumePosTitle">{info.experience[id].positionTitle}</div>
      <div className="locationAndDates">
        {(() => {
          if (info.experience[id].companyName.length > 0) {
            return (
              <div className="resumeCompanyName">
                {info.experience[id].companyName}
              </div>
            );
          } else {
            return '';
          }
        })()}
        {(() => {
          if (info.experience[id].companyLocation.length > 0) {
            return (
              <>
                |
                <div className="resumeExpLocation">
                  {info.experience[id].companyLocation}
                </div>
              </>
            );
          }
        })()}
        {(() => {
          if (
            info.experience[id].expStartDate.length > 0 &&
            info.experience[id].expEndDate.length > 0
          ) {
            return (
              <>
                |
                <div className="resExpDates">
                  {info.experience[id].expStartDate} to{' '}
                  {info.experience[id].expEndDate}
                  {info.experience[id].currentJob ? '(currently employed)' : ''}
                </div>
              </>
            );
          }
        })()}
      </div>
      <div className="resumeMainResponsibilities">
        {info.experience[id].positionResponsibilities}
      </div>
    </div>
  );
}

function ResumeEduBlock({ info, id }) {
  return (
    <div className="resumeEduBlock">
      <div className="resumeEduSubject">{info.education[id].subject}</div>
      <div className="locationAndDates">
        {(() => {
          if (info.education[id].schoolName.length > 0) {
            return (
              <div className="resumeEduSchoolName">
                {info.education[id].schoolName}
              </div>
            );
          }
        })()}
        {(() => {
          if (info.education[id].studyLocation.length > 0) {
            return (
              <>
                |
                <div className="studyEduLocation">
                  {info.education[id].studyLocation}
                </div>
              </>
            );
          }
        })()}
        {(() => {
          if (
            info.education[id].eduStartDate.length > 0 &&
            info.education[id].eduEndDate.length > 0
          ) {
            return (
              <>
                |
                <div className="resumeEduDates">
                  {info.education[id].eduStartDate} to{' '}
                  {info.education[id].eduEndDate}
                </div>
              </>
            );
          }
        })()}
      </div>
      <div className="resumeAboutStudy">{info.education[id].aboutStudy}</div>
    </div>
  );
}

export function Preview({ info }) {
  return (
    <div className="Preview">
      <div className="paper">
        <div className="resumeName">{info.generalInfo.fullName}</div>
        {(() => {
          if (
            info.generalInfo.email ||
            info.generalInfo.homeLocation ||
            info.generalInfo.phoneNum ||
            info.generalInfo.generalAbout
          ) {
            return <hr width="100%" />;
          }
        })()}
        <div className="contact">
          <div className="resumeLocation">{info.generalInfo.homeLocation}</div>
          <div className="resumePhone">
            {info.generalInfo.phoneNum && info.generalInfo.homeLocation
              ? `|${info.generalInfo.phoneNum}`
              : info.generalInfo.phoneNum}
          </div>
          <div className="resumeEmail">
            {(info.generalInfo.email && info.generalInfo.phoneNum) ||
            (info.generalInfo.email && info.generalInfo.homeLocation)
              ? `|${info.generalInfo.email}`
              : info.generalInfo.email}
          </div>
        </div>
        <div className="resumeGenAbout">{info.generalInfo.generalAbout}</div>
        {(() => {
          for (let i = 0; i < info.experience.length; i++) {
            if (info.experience[i].visible) {
              return [
                <div className="resumeExperienceTitle" key={0}>
                  Experience
                </div>,
                <hr width="100%" key={1} />,
              ];
            }
          }
        })()}
        <div className="resumeExperience">
          {info.experience.map((block) => {
            if (block.visible) {
              return (
                <ResumeExpBlock
                  info={info}
                  id={block.listId}
                  key={block.listId}
                />
              );
            } else {
              return;
            }
          })}
        </div>
        {(() => {
          for (let i = 0; i < info.education.length; i++) {
            if (info.education[i].visible) {
              return [
                <div className="resumeEducationTitle" key={0}>
                  Education
                </div>,
                <hr width="100%" key={1} />,
              ];
            }
          }
        })()}
        <div className="resumeEducation">
          {info.education.map((block) => {
            if (block.visible) {
              return (
                <ResumeEduBlock
                  info={info}
                  id={block.listId}
                  key={block.listId}
                />
              );
            } else {
              return;
            }
          })}
        </div>
      </div>
    </div>
  );
}
