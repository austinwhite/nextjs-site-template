import Head from 'next/head'
import MlAlg from "@/src/components/ml-alg"
import utilStyles from "@/styles/utils.module.css"
import projStyles from "@/styles/projects.module.css"

export default function Contact() {
  return (
    <div className={ utilStyles["page-container"] }>
      <Head>
        <title>Projects</title>
      </Head>


      <div className={ projStyles["ml-algs"] }>
        <h1>A Study of Foundational ML Algorithms</h1>
        <br/>
        <MlAlg 
          name="K-Nearest Neighbors"
          url="https://github.com/austinwhite/k-nearest-neighbors" 
        />
        <MlAlg 
          name="Linear Regression"
          url="https://github.com/austinwhite/linear-regression" 
        />
        <MlAlg 
          name="Logistic Regression"
          url="https://github.com/austinwhite/logistic-regression" 
        />
        <MlAlg 
          name="Naive Bayes"
          url="https://github.com/austinwhite/naive-bayes" 
        />
        <MlAlg 
          name="Support Vector Machine"
          url="https://github.com/austinwhite/support-vector-machine" 
        />
        <MlAlg 
          name="Decision Tree"
          url="https://github.com/austinwhite/decision-tree" 
        />
        <MlAlg 
          name="Random Forest"
          url="https://github.com/austinwhite/random-forest" 
        />
        <MlAlg 
          name="K-Means Clustering"
          url="https://github.com/austinwhite/k-means-clustering" 
        />
        <MlAlg 
          name="Adaboost"
          url="https://github.com/austinwhite/adaboost" 
        />
        <MlAlg 
          name="Principal Component Analysis"
          url="https://github.com/austinwhite/principal-component-analysis" 
        />
      </div>
    </div>
  )
}
