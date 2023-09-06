import React, { useState } from "react";
import { PageLayout } from "./components/PageLayout";

import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import Button from "react-bootstrap/Button";

import { ProfileData } from "./components/ProfileData";
import { getCalDelta } from "./mgraph";

const updateIRM = (outlookDelta) => {
  console.log(outlookDelta);
  //Separar e atualizar o IRM...
}

function ProfileContent() {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  function getCalendarDelta() {
    const request = {
        ...loginRequest,
        account: accounts[0]
    };

    instance.acquireTokenSilent(request).then((response) => {
      const delta = getCalDelta(response.accessToken, accounts[0].tenantId).then(response => setGraphData(response));
      updateIRM(delta)
    }).catch((e) => {
        instance.acquireTokenPopup(request).then((response) => {
          const delta = getCalDelta(response.accessToken, accounts[0].tenantId).then(response => setGraphData(response));
          updateIRM(delta)
        });
    });
  }

  return (
      <>
          {graphData ? 
              <ProfileData graphData={graphData} />
              :
              <div>
              <Button variant="secondary" onClick={getCalendarDelta}>Get Calendar Delta</Button>
              </div>
          }
      </>
  );
};

function App() {
  return (
      <PageLayout>
        <AuthenticatedTemplate>
          <ProfileContent />
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
            <p>Você ainda não está logado.</p>
        </UnauthenticatedTemplate>
      </PageLayout>
  );
}

export default App;
