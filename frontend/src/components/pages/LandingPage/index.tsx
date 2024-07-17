import LandingPageDescription from "@/components/reusable/Header/LandingPageDesription";
import PageLayout from "@/components/layout/PageLayout";
import WhatWeOffer from "./WhatWeOffer";
import BestSeller from "./BestSeller";

const LandingPage = () => {

    return (
        <PageLayout>
            <main className="landing-page" >
                <LandingPageDescription />
                <WhatWeOffer />
                <BestSeller />
            </main>
        </PageLayout>
    );
};

export default LandingPage;