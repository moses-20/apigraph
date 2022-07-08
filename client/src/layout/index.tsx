import { PropsWithChildren } from "react";
import Page from "material/page";
import Main from "material/main";
import Home from "pages/home";

function Layout({ children }: PropsWithChildren) {
  return (
    <Page>
      <Main>
        {children}
        <Home />
      </Main>
    </Page>
  );
}

export default Layout;
