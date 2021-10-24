import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap';

export class RulesIndex extends Component {
	render() {
		return (
			<div>
				<div className="page-header">
					<h3 className="page-title"> Basic Tables </h3>
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb">
							<li className="breadcrumb-item"><a href="!#" onClick={ event => event.preventDefault() }>Tables</a></li>
							<li className="breadcrumb-item active" aria-current="page">Basic tables</li>
						</ol>
					</nav>
				</div>

				<div className="col-lg-12 grid-margin stretch-card">
					<div className="card">
						<div className="card-body">
							<h4 className="card-title">Bordered table</h4>
							<button type="button" className="btn btn-primary btn-fw">New</button>
							<div className="table-responsive">
								<table className="table table-bordered">
									<thead>
										<tr>
											<th> # </th>
											<th> Name </th>
											<th> Description </th>
											<th> </th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td> 1 </td>
											<td> Herman Beck </td>
											<td>5</td>
											<td> $ 77.99 </td>
										</tr>
										
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>

			</div>
		)
	}
}

export default RulesIndex
