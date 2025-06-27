import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import PortfolioStatic from "@/pages/portfolio-static";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={PortfolioStatic} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <>
      <Router />
      <Toaster />
    </>
  );
}

export default App;