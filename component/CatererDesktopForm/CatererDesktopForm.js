import React, { Component, Fragment, createRef} from 'react';
import style from "./CatererDesktopForm.module.scss"
import MaskedInput from 'react-maskedinput';



 
export default class CatererDesktopForm extends Component {

	constructor(props){
		super(props);
		this.FormRef=createRef()
	}


	state = {
		currentStep:0
	};


	goNextStep=()=>{
		let updateCurrentStep;
		
		let {currentStep}=this.state; 
		currentStep = currentStep >= 1? 1: currentStep+1;
		

		//setTimeout(()=>{
			this.setState(currentState=>{
				console.log("currentState.currentStep: ", currentState.currentStep)
				updateCurrentStep=currentState.currentStep;
				console.log("before modification => updateCurrentStep: ",updateCurrentStep)
				updateCurrentStep= updateCurrentStep >= 2? 2: updateCurrentStep+=1;
				console.log("after modification => updateCurrentStep: ",updateCurrentStep)
				return({
						currentStep:updateCurrentStep,
						isInputFocus:false
				})
				}, this.FormRef.current.scrollTo(0,0)
			)
		// },10)
			
	}

	goToPrecedingStep=()=>{
		let currentStep=this.state.currentStep;
		currentStep=currentStep<=0?0:currentStep-1;
		this.setState({
				currentStep,
				isInputFocus:false
			},
			() => this.FormRef.current.scrollTo(0,0)
		)
	}

	render() { 

		let {
			FormRef
		}=this

		let {
			currentStep
		}=this.state


		let previousButton=() =>{
			let{currentStep}=this.state
			return (
				<button 
					className={style["form__go-to-preceding-step-button"]}
					// className={style["form__go-to-preceding-step-button"]}
					type="button"
					onClick={this.goToPrecedingStep}
				>
					Previous step
				</button>
			)
		}			
		let nextButton =() => {
			let{currentStep}=this.state
			return(
				<button
					className={style["form__prepare-go-to-next-step-button"]}
					type="button"
					onClick={this.goNextStep}
				>
					Next step
				</button>
			)
		}


		return (
			<div ref={FormRef}  className={style["mobile-form"]} >				
				
				<form onSubmit={this.handleSubmit} className={style["caterer-call-to-action-form"]} >
				<div className={style["form__function-container"]}>
					<p className={style["form__step-number"]} >Step {currentStep +1}/3</p>
				</div>
					<FirstStep
						currentStep={currentStep}
					/>
					<SecondStep
						currentStep={currentStep}
					/>
					<ThirdStep
						currentStep={currentStep}
					/>

					<div className={style["form__step-button-container"]}	>
						{ 
							currentStep>0 &&
							previousButton()
						}
						{ 
							currentStep<4&&
							nextButton()
						}
					</div>
				</form>
				
			</div>
		);
	}
}










const FirstStep= (props)=>{ 
	if(props.currentStep!==0) return null

	return ( 
		<div className={style["form__introduction_sequence"]}>
			<div className={style["content"]}/>
			
			<MaskedInput 
				mask="11-11-1111" 
			/>	
		</div>
	)
}


const SecondStep=(props)=>{
	if(props.currentStep!==1) return null	
	return <div className={style["content"]}/>
}


const ThirdStep=(props)=>{
	if(props.currentStep!==2) return null	
	return <div className={style["content"]}/>
}
