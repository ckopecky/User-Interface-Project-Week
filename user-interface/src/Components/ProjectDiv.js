import React from 'react';
import homeVillas from '../img/home/home-villas-img.png';
import outskirts from '../img/home/home-outskirts-img.png';
import blocks from '../img/home/home-the-blocks-img.png';


const ProjectDiv = () => {
    return (
        <>
            <div className="recent-project the-villas">
                <img src={homeVillas} alt="The-Villas" />
                <h2><span>THE VILLAS</span></h2>
                <div className="recent-project-content">
                    <p>
                        <strong>The Villas</strong> bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>
                    <p>
                        Capitalize on low hanging fruit to identify a ballpark value added to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line. 
                    </p>
                </div>
            </div>
            <div className="recent-project the-outskirts">
                <img src={outskirts} alt="The-Outskirts"/>
                <h2 className="left-span"><span>OUTSKIRTS</span></h2>
                <div className="recent-project-content">
                    <p>	
						<strong>The Outskirts</strong> are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.
					</p> 
	
					<p>
						Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
					</p>
                </div>
            </div>
            <div className="recent-project the-villas">
                <img src={blocks} alt="The-Blocks" />
                <h2><span>THE BLOCKS</span></h2>
                <div className="recent-project-content">
                    <p>	
					    <strong>The Blocks</strong> are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. 
                    </p> 
		
				    <p>
					    Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
                    </p>
                </div>
            </div>
        </>
    );
};

export default ProjectDiv;