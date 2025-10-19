import UIDesignProjects from "../Components/UIDesignProjects";
import SectionTitle from "../Components/SectionTitle";

const Projects = () => {
	return (
		<div className="w-full flex justify-center" id="uiDesignProjects">
			<div className="w-full xl:w-[70%] flex flex-col pb-16">
				<div className="w-full ">
					<SectionTitle title="UI DESIGN" subtitle="My UI work" />
				</div>
				<UIDesignProjects/>
			</div>
		</div>
	);
};

export default Projects;