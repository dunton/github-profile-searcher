import React, { Component } from 'react';
import RepoList from './RepoList';

class Profile extends Component {

	render() {
		const repoLink = `${this.props.userData.html_url}?tab=repositories`

		return (
				<div className="row">
					<div className="col-md-12">
						<div className="panel panel-default">
							<div className="panel-header">
								<h3 className="panel-title">{this.props.userData.name}</h3>
							</div>
						</div>
					</div>
					<div className="col-md-12">
						<div className="panel-body">
							<div className="row">
								<div className="col-md-5">
									<img src={this.props.userData.avatar_url} className="thumbnail" alt="avatar url" />
								</div>
								<div className="col-md-7">
									<div>
										<div>
											<a href={repoLink} className="label label-primary">{this.props.userData.public_repos} Repos</a>
											<br />
											<br />
											<ul className="list-group">
												<li className="list-group-item"><strong>Username: </strong> {this.props.userData.login}</li>
												<li className="list-group-item"><strong>Location: </strong> {this.props.userData.location}</li>
												<li className="list-group-item"><strong>Email Address: </strong> {this.props.userData.email}</li>
											</ul>

											<hr />
											
											<h3>User Repositories</h3>
											<RepoList userRepos={this.props.userRepos} />

										
											
										</div>
									</div>
								</div>
							</div>
							
						</div>

					</div>
					<div className="col-md-12">
						<a id="visit-profile" className="btn btn-primary" target="_blank" href={this.props.userData.html_url}>Visit Profile</a>
					</div>
				</div>
		)
	}
}

export default Profile;