import React from 'react'

const LeftSidebar = () => {
    return (
        <>
            <div class="col-lg-2 col-sm-12 " id="sidebar" role="navigation" style={{ backgroundColor: "white",
        height:"85vh" }}>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="#"><i class="fas fa-user font-weight-bold m-2"></i> <span className="ml-3">Overview</span></a></li>
                    
                    <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far fa-chart-bar font-weight-bold m-2"></i> <span className="ml-3">Analytics</span></a></li>
                    <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-file-export font-weight-bold m-2"></i><span className="ml-3">Export</span></a></li>
                    <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-tablet-alt font-weight-bold m-2"></i><span className="ml-3">Snippets</span></a></li>
                    <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-atom font-weight-bold m-2"></i> <span className="ml-3">Flex</span></a></li>
                    <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far fa-folder font-weight-bold m-2"></i> <span className="ml-3">Layouts</span></a></li>
                    <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far fa-folder font-weight-bold m-2"></i> <span className="ml-3">Layouts</span></a></li>
                   <hr/>
                    <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far fa-folder font-weight-bold m-2"></i> <span className="ml-3">Layouts</span></a></li>
                   
                </ul>
            </div>
        </>
    )
}

export default LeftSidebar