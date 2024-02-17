import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class EphemeralLight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deps: {},
            detailsModalShow: false,
        };
    }

    handleScrollToStats = () => {
        window.scrollTo({
            top: 0
        })
    }

    render() {
        let detailsModalShow = (data) => {
            this.setState({ detailsModalShow: true, deps: data });
        };

        let detailsModalClose = () => this.setState({ detailsModalShow: false });
        if (this.props.resumeProjects && this.props.resumeBasicInfo) {
            var sectionName = this.props.resumeBasicInfo.section_name.ephemeralLight;
            var projects = this.props.resumeProjects.projects.map(function (projects) {
                return (
                    <div style={{justifyContent: "center", alignItems: "center"}}>
                        <div
                            className="row"
                            key={projects.title}
                            style={{ cursor: "pointer", marginBottom: 10, width: "100%"}}
                        >
                            <div className="col-md-3 col-lg-3 col-xl-3 col-sm-12 mx-auto">
                            <iframe
                                src={`https://www.youtube.com/embed/${projects.youtube}`}
                                style={{position: 'relative', objectFit: "contain", top: 0, left: 0}}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                            />
                            </div>
                            <div className="col-md-8 col-lg-8 col-xl-5 col-sm-12 mx-auto">
                                <h1 className="subsection-title" style={{ color: "#f4f4f4", fontSize: "200%" }}>
                                    <span>{projects.title}</span>
                                </h1>
                                <h3
                                    style={{
                                        color: "#f4f4f4",
                                        marginBottom: 5,
                                        textAlign: 'justify',
                                        textAlignLast: 'left',
                                        maxWidth: "100%",
                                        marginLeft: 10,
                                        marginRight: 10,
                                    }}
                                >
                                    <span style={{ fontSize: '2vh' }}>
                                        {projects.description}
                                    </span>
                                </h3>
                            </div>
                        </div>
                        <div style={{margin: 10, height: 3, backgroundColor: "#F1FAEE"}}/>
                    </div>
                );
            });
        }
        return (
            <section id="ephemeralLightSection" style={{}}>
                <div className="col-md-12 col-xl-12 col-lg-12">
                    <h1 className="section-title" style={{ color: "#f4f4f4", fontSize: "300%" }}>
                        <span>{sectionName}</span>
                    </h1>
                    <div className="row col-md-10 col-lg-10 col-xl-10 col-sm-12 mx-auto">
                        <div className="col-md-3 col-lg-3 col-xl-3 col-sm-12 mx-auto">
                            <img
                                src={this.props.resumeProjects.thumbnail}
                                alt="projectImages"
                                style={{ marginBottom: 0, paddingBottom: 0, position: 'relative', objectFit: "contain"}}
                            />
                        </div>
                        <div
                            className="col-md-8 col-lg-8 col-xl-5 col-sm-12 mx-auto"
                            style={{display: 'flex', alignItems: 'center'}}
                        >
                            <h3
                                style={{
                                    color: "#f4f4f4",
                                    marginBottom: 20,
                                    textAlign: 'justify',
                                    textAlignLast: 'left',
                                    maxWidth: "100%",
                                    marginLeft: 10,
                                    marginRight: 10,
                                }}
                            >
                            <span style={{ fontSize: '2.5vh' }}>
                                {this.props.resumeProjects.description}
                            </span>
                            </h3>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="col-md-10 col-lg-10 col-xl-10 col-sm-12 mx-auto">{projects}</div>
                    </div>
                    <ProjectDetailsModal
                        show={this.state.detailsModalShow}
                        onHide={detailsModalClose}
                        data={this.state.deps}
                    />
                </div>
            </section>
        );
    }
}

export default EphemeralLight;
