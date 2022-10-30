import loadable from "@loadable/component";

const Layout = loadable(() => import("@layout/Layout"));
const Header = loadable(() => import("@components/Header"));
const Calendar = loadable(() => import("@components/Calendar"));

const App = () => {
  return (
    <Layout>
      <Header />
      <Calendar />
    </Layout>
  );
};

export default App;
